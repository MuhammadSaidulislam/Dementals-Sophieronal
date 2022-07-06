import React from 'react'

//css
import './Counter.css'

function Counter() {
    return (

        <section className="subscribe-area pb-50 pt-70">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="subscribe-text mb-15">

                            <h2 className='h2_text'>MINT A DEMENTAL</h2>
                            <span className='span_text'>MINT DATE: TBA</span>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className="col-md-5 mt-3">
                        <div className="subscribe-wrapper subscribe2-wrapper mb-15">
                            <div className="subscribe-form">
                                <form action="#">
                                    <input type="number" />
                                    <button>MINT</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default Counter