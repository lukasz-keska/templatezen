import React, { Component } from 'react';
import authors from "../../../data/author.json";

// Author details
function getAuthor(id) {
    return authors.filter(author => { return author.id === parseInt(id) })[0];
}

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const item = getAuthor(detailId);
        return (
            <section className="sa-paster-about-section section-padding pd-default">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="sa-paster-about-area">
                                <h3>{item.name}</h3>
                                <p className="designation">{item.post}</p>
                                <div dangerouslySetInnerHTML={{ __html: item.htmltext }} />
                                <div className="sa-team-social">
                                    <h5>Social links</h5>
                                    <ul className="text-center">
                                        {/* Data */}
                                        {item.social.map((social, i) => (
                                            <li key={i}><a rel={"external"} href={social.url}><i className={social.icon} /></a></li>
                                        ))}
                                        {/* Data */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5 offset-xl-1 align-self-center">
                            <div className="ss-pastor-img-wrap">
                                <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;