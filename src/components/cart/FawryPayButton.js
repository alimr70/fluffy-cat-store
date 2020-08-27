import React from "react";

export default class FawryPayButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        {/* <!-- FawryPay Checkout Button --> */}
        <a
          href={`https://atfawry.fawrystaging.com/ECommercePlugin/FawryPay.jsp?chargeRequest={ "language":"ar-eg", "merchantCode":"1tSa6uxz2nRbgY+b+cZGyA==","merchantRefNumber":"12333", "customer":{ "name":"test user", "mobile":"01211237268","email":"test@test.com", "customerProfileId":"8723871236" },"order":{ "description":"test bill inq", "expiry":"2","orderItems":[ { "productSKU":"12222", "description":"Test Product","price":"50", "quantity":"2", "width":"10", "height":"5", "length":"100", "weight":"1" } ] },"signature":"243d69d005ba46943c5f8d590cf7f8ad6c02663a838ca5b7039c33e03ad10799"}&successPageUrl='https://fluffy-cat.netlify.app/success'&failerPageUrl='https://fluffy-cat.netlify.app/failure'`}>
          <input
            type="image"
            alt="FawryPay checkout button"
            src="https://www.atfawry.com/assets/img/FawryPayLogo.jpg"
          />
        </a>
      </React.Fragment>
    );
  }
}
