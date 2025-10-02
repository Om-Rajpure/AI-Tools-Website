import React, { useState } from 'react'
import dayjs from 'dayjs'

const CreationItem = ({ item }) => {
  const [showFull, setShowFull] = useState(false)
  const maxLength = 120 // max characters to show in preview

  const truncatedPrompt =
    item.prompt.length > maxLength && !showFull
      ? item.prompt.substring(0, maxLength) + "..."
      : item.prompt

  return (
    <div className="p-4 max-w-5xl bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          {/* Prompt */}
          <h2 className="font-medium text-gray-800">{truncatedPrompt}</h2>

          {/* Read More toggle */}
          {item.prompt.length > maxLength && (
            <button
              onClick={() => setShowFull(!showFull)}
              className="text-blue-500 text-sm mt-1"
            >
              {showFull ? "Show less" : "Read more"}
            </button>
          )}

          {/* Type and Formatted Date using created_at */}
          <p className="text-gray-500 text-sm mt-1">
            {item.type} -{" "}
            {item.created_at
              ? dayjs(item.created_at).format("DD MMM YYYY, HH:mm")
              : "Unknown date"}
          </p>
        </div>

        {/* Type Badge */}
        <button className="bg-[#EFF6FF] border border-[#BFDFE] text-[#1E40AF] px-4 py-1 font-semibold rounded-full">
          {item.type}
        </button>
      </div>
    </div>
  )
}

export default CreationItem
