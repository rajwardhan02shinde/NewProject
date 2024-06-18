// RemarkItem.jsx
import React from "react";

const RemarkItem = ({ remark, onUpdateStatus }) => {
  return (
    <div className="remark">
      <p>
        <strong>Remark:</strong> {remark.text}
      </p>
      <p>
        <strong>Status:</strong> {remark.status}
        <button onClick={() => onUpdateStatus(remark.id, "Updated Status")}>
          Update Status
        </button>
      </p>
      <p>
        <strong>Date:</strong> {remark.date}
      </p>
    </div>
  );
};

export default RemarkItem;
