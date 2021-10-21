import React from 'react'
import { Form, Button, Col, Row, Typography } from 'antd';
import { Field } from 'redux-form';
import { NewInput } from '../utils/CustomFormFields';

const { Title } = Typography

const Login = ({ handleSubmit, pristine, invalid }) => {
    return (
        <div>
            <Col
                span={8} offset={8}
            >
                <div>
                    <Title level={3}>Авторизация</Title>
                </div>
            </Col>
            <Row>
                <Col span={8} offset={8}>
                    <Form
                    >
                        <Field
                            component={NewInput}
                            name="username"
                            placeholder="Login"
                            hasFeedback
                        />

                        <Field
                            component={NewInput}
                            name="password"
                            type="password"
                            placeholder="Password"
                            hasFeedback
                        />

                        <div>
                            <Button type="primary" disabled={pristine || invalid} htmlType="submit" onClick={handleSubmit}>
                                Войти
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Login;
