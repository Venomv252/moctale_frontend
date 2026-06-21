// Create: components/movies/CastInput.jsx

import React from "react";

const CastInput = ({ cast, setFormData }) => {
  const handleCastChange = (index, field, value) => {
    setFormData((prev) => {
      const updatedCast = [...prev.cast];

      updatedCast[index][field] = value;

      return {
        ...prev,
        cast: updatedCast,
      };
    });
  };

  const addCastMember = () => {
    setFormData((prev) => ({
      ...prev,
      cast: [
        ...prev.cast,
        {
          person: "",
          roleName: "",
          characterImage: "",
          order: 0,
        },
      ],
    }));
  };

  const removeCastMember = (index) => {
    setFormData((prev) => ({
      ...prev,
      cast: prev.cast.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-6 lg:col-span-2">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Cast Members</h2>

        <button
          type="button"
          onClick={addCastMember}
          className="rounded-xl bg-violet-600 px-4 py-2"
        >
          Add Cast
        </button>
      </div>

      {cast.map((member, index) => (
        <div
          key={index}
          className="grid grid-cols-1 gap-4 rounded-2xl
          border border-white/10 bg-[#111] p-4 lg:grid-cols-2"
        >
          <input
            type="text"
            placeholder="Person ObjectId"
            value={member.person}
            onChange={(e) =>
              handleCastChange(index, "person", e.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818]
            px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Character Name"
            value={member.roleName}
            onChange={(e) =>
              handleCastChange(index, "roleName", e.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818]
            px-4 py-3 outline-none"
          />

          <input
            type="text"
            placeholder="Character Image URL"
            value={member.characterImage}
            onChange={(e) =>
              handleCastChange(index, "characterImage", e.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818]
            px-4 py-3 outline-none"
          />

          <input
            type="number"
            placeholder="Display Order"
            value={member.order}
            onChange={(e) =>
              handleCastChange(index, "order", e.target.value)
            }
            className="rounded-xl border border-white/10 bg-[#181818]
            px-4 py-3 outline-none"
          />

          <button
            type="button"
            onClick={() => removeCastMember(index)}
            className="rounded-xl bg-[#740DF6] px-4 py-3"
          >
            Remove Cast Member
          </button>
        </div>
      ))}
    </div>
  );
};

export default CastInput;