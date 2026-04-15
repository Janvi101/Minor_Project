import { useEffect, useState } from 'react';

const Complaints = () => {
  const [complaints, setComplaints] = useState([]);

  const [form, setForm] = useState({
    location: '',
    issue: '',
    status: 'Pending',
    date: ''
  });

  // Fetch data
  const fetchComplaints = () => {
    fetch('http://localhost:8080/api/complaints')
      .then(res => res.json())
      .then(data => setComplaints(data));
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLocationClick = (location) => {
    const query = encodeURIComponent(`${location} water body Indore Madhya Pradesh`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  // Submit form
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log("Submitting:", form);

    const res = await fetch('http://localhost:8080/api/complaints', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    const data = await res.json();
    console.log("Saved:", data);

    await fetchComplaints(); // refresh table

    setForm({
      location: '',
      issue: '',
      status: 'Pending',
      date: ''
    });

  } catch (err) {
    console.error("Submit failed:", err);
  }
};

  return (
    <div className="glass p-6">
      <h2 className="mb-4">Public Complaint Portal</h2>

      {/* 📝 FORM */}
      <form onSubmit={handleSubmit} className="mb-6 flex gap-4 flex-wrap">
        <input
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="input-base"
          required
        />
        <input
          name="issue"
          placeholder="Issue"
          value={form.issue}
          onChange={handleChange}
          className="input-base"
          required
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="input-base"
          required
        />
        <button className="btn btn-primary">Submit</button>
      </form>

      {/* 📊 TABLE */}
      <div style={{ overflowX: 'auto' }}>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-3">Date</th>
              <th className="p-3">Location</th>
              <th className="p-3">Issue</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {complaints.map((c) => (
              <tr key={c.id}>
                <td className="p-3">{c.date}</td>

                {/* 👇 Clickable Location */}
                <td className="p-3">
                  <span
                    style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
                    onClick={() => handleLocationClick(c.location)}
                  >
                    {c.location}
                  </span>
                </td>

                <td className="p-3">{c.issue}</td>
                <td className="p-3">{c.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Complaints;