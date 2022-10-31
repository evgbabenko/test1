import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getData } from '../script/services';

import './detailedjob.css'

function DetaildeJob() {
    const params = useParams();
    const jobId = params.id;
    const [job, setJob] = useState(null);

    useEffect(() => {
        new getData().fetchJob(jobId).then((job) => {
            setJob(job);
        })
    }, [])
    console.log(job)
    return (job) ? (
        <section className="jobdetails">
            <div className="container">
                <div className='info'>
                    <div className="header">
                        <div className="title">
                            Job Details
                        </div>
                    </div>
                    <div className="btn-box">
                        <div className='btn' role='button'> Apply Now</div>
                    </div>
                    <div className="title-box">
                        <div className="job-title">{job.title}</div>
                        <div className='job-salary'>{job.salary}
                            <p>Brutto, per year</p>
                        </div>
                    </div>
                    <div className="posted">
                        Posted: {job.createdAt}
                    </div>
                    <div className="job-description">
                        {job.description}
                    </div>
                    <div className="job-benefits">
                        <h3>Compensation & benefits</h3>
                        <ul className='ul-benefits'>
                            {
                                job.benefits.map((item, index) => {
                                    return <li key={`${item}-${index * 7}`}>{item}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="btn-box">
                        <div className='btn' role='button'> Apply Now</div>
                    </div>
                    <div className='additional-info'>
                        <h3>Additional info</h3>
                        <h4>Employment type</h4>
                        <div className='a-info'>
                            {
                                job.employment_type.map((item, index) => {
                                    return <div key={`${item}-${index * 5}`} className='bage1' role='button'>{item}</div>
                                })
                            }
                        </div>
                        <h4>Benefits</h4>
                        <div className='a-info'>

                            {
                                job.benefits.map((item, index) => {
                                    return <div key={`${item}-${index * 5}`} className='bage2' role='button'>{item}</div>
                                })
                            }
                        </div>
                    </div>
                    <div className='images'>
                        <h3>Attached images</h3>
                        <div className='info-images'>
                            {
                                job.pictures.map((item, index) => {
                                    return <img key={`${item}-${index * 5}`} src={item} alt={item} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="map">
                    <div className='name'>{job.name}</div>
                    <div className='email'><a href={`mailto:${job.email}`}>{job.email}</a></div>
                    <div className='phone'><a href={`tel:${job.phone}`}>{job.phone}</a></div>
                    <div className='address'>{job.address}</div>
                </div>
            </div>
        </section>
    ) : <></>
}

export default DetaildeJob