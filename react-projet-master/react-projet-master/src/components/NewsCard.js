import React, { Component } from 'react'

import './NewsCard.css'

class NewsCard extends Component {

    render() {

        const { title, text, picture } = this.props

        return (



            <div className="card horizontal" style={ { width: '1000px' } } >
                <div className="card-panel grey lighten-5 z-depth-1">
                    <img alt="" className="news-img" src={ picture } />
                    <span className="card-title">
                        { title }
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="news-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span style={ { width: '600px' } }>{ text }</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default NewsCard