import App from 'next/app';
import Layout from '../components/_App/Layout';

class MyApp extends App {
  render() {
    // Destructuring from props
    const { Component } = this.props;
    return (
      <Layout>
        {/* pass Component as children */}
        <Component />
      </Layout>
    );
  }
}

export default MyApp;
