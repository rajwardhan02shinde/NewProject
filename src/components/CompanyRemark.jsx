import React, { useState } from "react";
import AddRemarkForm from "./AddRemarkForm";
import ClearFiltersButton from "./ClearFiltersButton";

const companiesData = [
  {
    name: "Company A",
    academicYear: 2023,
    remarks: [
      {
        text: "Remark: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod felis et dolor viverra, at aliquam nunc gravida. Proin nec lorem eu odio cursus efficitur. Nulla nec erat ac risus commodo cursus. Ut rutrum enim ac justo eleifend sollicitudin. Vestibulum tincidunt eros ut congue eleifend. Duis ut felis metus. Integer eget aliquam sem. Integer ullamcorper sapien vitae finibus rhoncus. Curabitur porta velit quis neque aliquam, quis cursus lorem placerat. Ut dignissim lacus vel ante posuere, non condimentum magna eleifend. Sed vehicula ante ut augue facilisis, vitae mattis libero feugiat. Nulla efficitur varius fermentum. Quisque tincidunt lobortis magna, ut varius nulla rutrum nec.",
        status: "Still Communication",
        date: "2023-01-15",
      },
      // Add more remarks as needed
    ],
  },
  // Add more companies data
];

const CompanyRemark = () => {
  const [company, setCompany] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [showAddRemarkForm, setShowAddRemarkForm] = useState(false);

  const handleCompanyChange = (e) => {
    const companyName = e.target.value;
    setCompany(companyName);
    const selectedCompany = companiesData.find(
      (company) => company.name === companyName
    );
    if (selectedCompany) {
      setRemarks(selectedCompany.remarks);
    }
    setShowAddRemarkForm(false);
  };

  const handleAddRemark = (newRemark) => {
    setRemarks([...remarks, newRemark]);
    setShowAddRemarkForm(false);
  };

  const handleClearFilters = () => {
    setCompany("");
    setRemarks([]);
    setShowAddRemarkForm(false);
  };

  return (
    <div className="container">
      <div className="header">
        <select value={company} onChange={handleCompanyChange}>
          <option value="">Select Company</option>
          {companiesData.map((company) => (
            <option key={company.name} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
        {company && <ClearFiltersButton onClick={handleClearFilters} />}
      </div>
      {company && (
        <>
          <div className="academic-year">
            <p>
              <strong>Academic Year:</strong>{" "}
              {companiesData.find((c) => c.name === company).academicYear}
            </p>
          </div>
          <div className="remark-list">
            <h2>Remarks for {company}</h2>
            {remarks.length > 0 ? (
              remarks.map((remark, index) => (
                <div className="remark" key={index}>
                  <p>
                    <strong>Remark:</strong> {remark.text}
                  </p>
                  <p>
                    <strong>Status:</strong> {remark.status}
                  </p>
                  <p>
                    <strong>Date:</strong> {remark.date}
                  </p>
                </div>
              ))
            ) : (
              <p>No remarks available.</p>
            )}
          </div>
          <button onClick={() => setShowAddRemarkForm(true)}>
            Add New Remark
          </button>
          {showAddRemarkForm && <AddRemarkForm onAddRemark={handleAddRemark} />}
        </>
      )}
    </div>
  );
};

export default CompanyRemark;
