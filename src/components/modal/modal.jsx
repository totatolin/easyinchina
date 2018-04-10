import React from 'react';
import { Modal, Button } from 'antd';
import Login from './login/login.jsx';
import Register from './register/register.jsx';

class Modals extends React.Component {
  state = {
    loading: false,
    visible: false,
    modal: null
  }
  showModal = () => {
    this.switchType();
    this.setState({
      visible: true,
    });
  }
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  showRegister = () => {
    this.setState({modal: <Register />});
  }
  switchType = () => {
    let modal
    switch (this.props.type) {
      case 'login':
        this.setState({modal: <Login showRegister={this.showRegister.bind(this)} />})
        break
      case 'register':
        this.setState({modal: <Register />})
        break
    }
  }
  render() {
    const { visible, loading, modal } = this.state;
    return (
      <div>
        <div type="primary" className="cursor-pointer" onClick={this.showModal}>
          Login in
        </div>
        <Modal className="modal"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          width="400px"
          footer={[
            <Button key="back" onClick={this.handleCancel}>Return</Button>,
            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
              Submit
            </Button>,
          ]}
        >
          {modal}
        </Modal>
      </div>
    );
  }
}

export default Modals;