import React, { useEffect, useState } from 'react'
import { Sparkles, Gem } from 'lucide-react'
import dayjs from 'dayjs'
import CreationItem from '../components/CreationItem'

// Dummy data
const dummyCreationData = [
  {
    id: 1,
    title: "AI Blog",
    type: "Article",
    prompt: "Generate a blog title for the keyword blog in Technology.",
    created_at: "2025-09-21T21:09:50.492Z"
  },
  {
    id: 2,
    title: "Resume Review",
    type: "Resume",
    prompt: "Review a professional resume and suggest improvements.",
    created_at: "2025-09-21T21:08:10.450Z"
  },
  {
    id: 3,
    title: "Generated Image",
    type: "Image",
    prompt: "Generate an image of a futuristic cityscape.",
    created_at: "2025-09-21T21:07:51.312Z"
  }
]

// Simulated plan data
const dummyPlanData = {
  planName: "Premium",
  expiryDate: dayjs().add(30, "day").toISOString()
}

const Dashboard = () => {
  const [creations, setCreations] = useState([])
  const [plan, setPlan] = useState(null)
  const [expiry, setExpiry] = useState(null)

  useEffect(() => {
    const fetchDashboardData = async () => {
      // simulate fetching creations
      setCreations(dummyCreationData)

      // simulate fetching plan
      setPlan(dummyPlanData.planName)
      setExpiry(dummyPlanData.expiryDate)
    }

    fetchDashboardData()
  }, [])

  return (
    <div className="h-full overflow-y-scroll p-6">
      <div className="flex justify-start gap-4 flex-wrap">
        {/* Total Creations */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Total Creations</p>
            <h2 className="text-xl font-semibold">{creations.length}</h2>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-[#3588F2] to-[#0BB0D7] text-white flex justify-center items-center rounded-full">
            <Sparkles className="w-5 text-white" />
          </div>
        </div>

        {/* Active Plan */}
        <div className="flex justify-between items-center w-72 p-4 px-6 bg-white rounded-xl border border-gray-200">
          <div className="text-slate-600">
            <p className="text-sm">Active Plan</p>
            <h2 className="text-xl font-semibold">{plan || "Free"}</h2>
            {expiry && <p className="text-xs text-gray-500">Expires on: {dayjs(expiry).format("DD MMM YYYY")}</p>}
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF62C5] to-[#9E53EE] text-white flex justify-center items-center rounded-full">
            <Gem className="w-5 text-white" />
          </div>
        </div>
      </div>

      {/* Recent Creations */}
      <div className="space-y-3 mt-6">
        <p className="font-medium text-lg">Recent Creations</p>
        {creations.length > 0 ? creations.map((item) => <CreationItem key={item.id} item={item} />)
          : <p className="text-gray-500 text-sm">No creations yet. Start creating!</p>}
      </div>
    </div>
  )
}

export default Dashboard
