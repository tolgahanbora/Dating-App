import React from 'react'
import '../Style/PriceStyle.css'

function Price() {
    return (
        <div class='container-lg d-flex flex-column ' id='priceCont' >
            <h2 id='priceplanh2' ><b id='priceplan'>Price Plans</b></h2>
            <div class='row  '>

                <div className='col '>
                    <div class="card border border-2 " id='cardgroup2' >

                        <div class="card-body  rounded" id='basicplan'>
                            <h5 class="card-title" id='basiccapital'><b>Basic Plan</b></h5>
                            <h4 id='price2'><b>Free </b><small>/ Month</small></h4>
                            <ul className='liste'>
                            <li className='itemlist2'>Limited likes</li>
                                <li className='itemlist2'>All gaming activitiy</li>
                                <li className='itemlist2'>Limited connection on week</li>
                               
                            </ul>
                            <button href="#" class="btn btn-outline-danger" id='basicbtn'>Choose Plan </button>
                        </div>
                    </div>

                </div>
                <div className='col '>
                    <div class="card border border-2 " id='cardgroup3' >
                        <div class="card-body rounded">
                            <h5 class="card-title" id='celebcapital'><b>Premium Plan</b></h5>
                            <h4 id='price3'><b>$19.90 </b><small>/ Month</small></h4>
                            <ul className='liste'>
                                <li className='itemlist3'>No ads</li>
                                <li className='itemlist3'>All gaming activitiy</li>
                                <li className='itemlist3'>Unlimited connection on week</li>
                                <li className='itemlist3'>Unlimited Likes</li>
                                <li className='itemlist3'>Limited chat</li>
                                <li className='itemlist3'>See all your likes</li>

                            </ul>
                            <button href="#" class="btn btn-outline-danger" id='celebbtn'>Choose Plan </button>
                        </div>
                    </div>
                </div>
                <div className='col ' >
                    <div class="card  border border-2  rounded-2  " id='cardgroup1'  >
                        <span class="border border-2 rounded-2" id='mostpopular'><b id='mostpopular2'>Most Popular</b></span>
                        <div class="card-body rounded-2 " className='premiumplan'>
                            <h5 class="card-title" className='premiumplan' id='premiumcapital'><b id='premiumplan'>Influencer Plan</b></h5>
                            <h4 className='premiumplan' id='price1'><b class='premiumplan'>$29.90 </b><small class='premiumplan'>/ Month</small></h4>

                            <ul className='liste2' >
                            <li className='itemlist1'><b id='influencerb'>Only Influencer</b></li>
                                <li className='itemlist1'>No ads</li>
                                <li className='itemlist1'>Unlimited User</li>
                                <li className='itemlist1'>Unlimited connection on week</li>
                                <li className='itemlist1'>Unlimited Likes</li>
                                <li className='itemlist1'>See all your likes</li>
                               

                            </ul>

                            <button href="#" class="btn btn-danger rounded-1" id='premiumbtn'>Choose Plan </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Price