import React from 'react'

//css
import './Counter.css'

function Counter() {
    return (

        <section class="subscribe-area pb-50 pt-70">
            <div class="container">
                <div class="row">

                    <div class="col-md-6">
                        <div class="subscribe-text mb-15">

                            <h2 className='h2_text'>MINT A DEMENTAL</h2>
                            <span className='span_text'>MINT DATE: TBA</span>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div class="col-md-5 mt-3">
                        <div class="subscribe-wrapper subscribe2-wrapper mb-15">
                            <div class="subscribe-form">
                                <form action="#">
                                    {/* <div className='number-input'> */}


                                    <input type="number" />
                                    {/* <div className='plus-minus'>
                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                                        </div> */}

                                    {/* </div> */}

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