import React from 'react'
import { Avatar, Card } from 'antd'
import { Bookmark, Star } from 'lucide-react'

const JobCard = () => {
  return (
    <div>
        <Card>
            <div className='flex flex-col '>
                <div className='flex justify-between'>
                    <Avatar/>
                    <Bookmark/>
                </div>

                <div className='flex flex-col gap-1'>
                    <h1>Job Title</h1>
                    <Star/>
                    <p>Location</p>
                </div>

                <div>
                    <p>Job Type</p>
                    <p>Position</p>
                </div>

                <div>
                    <p>Expirience Level</p>
                </div>

            </div>
        </Card>
    </div>
  )
}

export default JobCard