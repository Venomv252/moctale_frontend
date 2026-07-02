import React from "react";
import UserRow from "./UserRow";
import Loader from "../../Shared/Loader";
import EmptyState from "../../Shared/EmptyState";

const UserTable = ({ users, loading, onDelete, onVerificationToggle }) => {
  if (loading) {
    return <Loader text="Loading users..." />;
  }

  if (!users || users.length === 0) {
    return (
      <EmptyState
        icon="👥"
        title="No users found"
        message="No users match your current filters. Try adjusting your search criteria."
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 bg-zinc-900">
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                User
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                Phone
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                Joined
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider text-gray-400">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow
                key={user._id}
                user={user}
                onDelete={onDelete}
                onVerificationToggle={onVerificationToggle}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
