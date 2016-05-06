import React, { PropTypes, Component } from 'react';
import classname from 'classname';
import './Modal.css';

class Modal extends Component {
    constructor() {
        super();
        this.state = { isModalOpen: false };
    }

    openModal() {
        this.setState({ isModalOpen: true });
    }

    closeModal() {
        this.setState({ isModalOpen: false });
    }

    clearAndClose() {
      this.props.clearItems();
      this.setState({ isModalOpen: false });
    }

    render() {
        const { children, clearItems } = this.props;

        return (
            <div>
                <button onClick={this.openModal.bind(this)}>Open Cart
                </button>
                <div
                    isModalOpen={this.state.isModalOpen}
                    className={classname(
                        'modal', { 'is-active': this.state.isModalOpen }
                    )}
                >
                    <div className="close-modal" onClick={this.closeModal.bind(this)}>X</div>
                    {children}
                    <button onClick={this.closeModal.bind(this)}>Close</button>
                    <button onClick={this.clearAndClose.bind(this)}>Clear</button>
                </div>
                <div className={
                    classname(
                    'modal-mask', { 'is-active': this.state.isModalOpen }
                    )
                }
                    onClick={this.closeModal.bind(this)}
                ></div>
            </div>
        );
    }
}

Modal.propTypes = {
    isModalOpen: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    clearItems: PropTypes.func.isRequired
};

export default Modal;
