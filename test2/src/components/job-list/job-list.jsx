import React, { useState, useEffect } from 'react';
import { MdStar } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { getData } from '../script/services';

import './job-list.css';

function JobList() {
    const [joblist, setJobList] = useState([]);
    useEffect(() => {
        new getData().fetchJobList().then((list) => {
            setJobList(list)
            console.log(list)
        })
    }, [])

    return (
        <section className='joblist'>
            <div className='container'>
                {
                    joblist.map((item, index) => {
                        return <Link to={`${item.id}`}><div className="list" key={`${item.id}-${index}`}>
                            <div className="head">
                                <div className="profile-area">
                                    <div className="avatar">
                                        {
                                            (item.pictures) ?
                                                <img src={`${item.pictures[0]}`} alt="" /> : <></>
                                        }

                                    </div>
                                    <div className="info">
                                        <h4>{item.title}</h4>
                                        <ul className='benefits'>
                                            {
                                                item.benefits.map((benefit, idx1) => {
                                                    return <li key={`${idx1}-${benefit}`}>{benefit}</li>
                                                })
                                            }
                                        </ul>
                                        <div className="location">
                                            <p className='location'>{item.name},&nbsp; <a href={`tel:${item.phone}`}>{item.phone}</a></p>
                                        </div>
                                    </div>

                                </div>
                                <div className="stars">
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                    <MdStar />
                                </div>
                            </div>
                            <div>

                            </div>
                        </div></Link>
                    })
                }
            </div>
        </section>
    )
}

export default JobList