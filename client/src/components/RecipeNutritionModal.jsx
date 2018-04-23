import React from 'react';
import { Modal, Image } from 'react-bootstrap';

class RecipeNutritionModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="list-item-value modal-link">
        <span onClick={this.handleShow}>500 cals</span>
        <Modal show={this.state.show} onHide={this.handleClose} >
          <Modal.Body>
            <Image src="https://media.blueapron.com/recipes/2901/facility/38/nutritional_label/1523888732-1-0007-4830/042318__2PM__White_Cheddar_Cheeseburgers__As_Packaged__LN.png" className="nutrition-label-img" />
            <div className="nutrition-label-bottom">
              <p className="nutrition-label-legal">
                Please note nutritional information, including ingredients and allergens, may differ from above based on your location. Location-specific nutritional information is available for viewing upon subscribing, or by logging in if you are already a subscriber.
              </p>
            </div>
          </Modal.Body>
          <button type="button" className="close" onClick={this.handleClose} />
        </Modal>
      </div>
    );
  }
}

export default RecipeNutritionModal;
