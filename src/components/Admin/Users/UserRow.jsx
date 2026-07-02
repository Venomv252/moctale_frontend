import React, { useState } from "react";
import VerifiedBadge from "./VerifiedBadge";
import { Trash2, Phone, Calendar, CheckCircle, XCircle } from "lucide-react";

const UserRow = ({ user, onDelete, onVerificationToggle }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete user "${user.username}"?`)) {
      onDelete(user._id);
    }
  };

  const handleVerificationToggle = async () => {
    const action = user.isVerified ? "unverify" : "verify";
    const confirmMessage = user.isVerified
      ? `Are you sure you want to unverify "${user.username}"? They will lose their verified status.`
      : `Are you sure you want to verify "${user.username}"? They will gain verified status.`;

    if (window.confirm(confirmMessage)) {
      setIsUpdating(true);
      await onVerificationToggle(user._id, !user.isVerified);
      setIsUpdating(false);
    }
  };

  return (
    <tr className="group border-b border-white/5 transition-colors hover:bg-white/5">
      {/* User Info */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-pink-600 text-sm font-bold text-white">
            {user.firstName?.[0]?.toUpperCase() || "U"}
            {user.lastName?.[0]?.toUpperCase() || ""}
          </div>

          {/* Name & Username */}
          <div>
            <div className="font-medium text-white">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-400">@{user.username}</div>
          </div>
        </div>
      </td>

      {/* Phone */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-gray-300">
          <Phone className="h-4 w-4 text-gray-500" />
          <span>{user.phone}</span>
        </div>
      </td>

      {/* Verified Status */}
      <td className="px-6 py-4">
        <VerifiedBadge isVerified={user.isVerified} />
      </td>

      {/* Join Date */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Calendar className="h-4 w-4 text-gray-500" />
          <span>{formatDate(user.createdAt)}</span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-2">
          {/* Verify/Unverify Button */}
          <button
            onClick={handleVerificationToggle}
            disabled={isUpdating}
            className={`rounded-lg p-2 opacity-0 transition-all group-hover:opacity-100 ${
              user.isVerified
                ? "text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                : "text-green-400 hover:bg-green-500/10 hover:text-green-300"
            } ${isUpdating ? "cursor-wait opacity-50" : ""}`}
            title={user.isVerified ? "Unverify user" : "Verify user"}
          >
            {user.isVerified ? (
              <XCircle className="h-4 w-4" />
            ) : (
              <CheckCircle className="h-4 w-4" />
            )}
          </button>

          {/* Delete Button */}
          <button
            onClick={handleDelete}
            className="rounded-lg p-2 text-red-400 opacity-0 transition-all hover:bg-red-500/10 hover:text-red-300 group-hover:opacity-100"
            title="Delete user"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
