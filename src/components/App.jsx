import 'antd/dist/antd.css'
import s from './App.module.css'
import { Redirect, Route, Switch } from 'react-router';
import { authRoutes, publicRoutes } from './utils/routes';
import { connect } from 'react-redux';
import { Layout } from 'antd';

const { Header, Content } = Layout

function App({ isAuth }) {
  return (
    <Layout>
      <Header />
      <Content className={s.wrapper}>
        <Switch>
          {isAuth && authRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />)}
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} component={Component} exact />)}
          <Redirect to='/login' />
        </Switch>
      </Content>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, null)(App);
