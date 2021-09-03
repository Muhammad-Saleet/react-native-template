import React, { ReactElement, RefObject, useRef } from "react"
import { useDispatch } from "react-redux"
import { StyleSheet, TouchableOpacity } from "react-native"
import { Button, Input } from "react-native-elements"
import { setToken } from "../../redux/slices/authSlice"
import { SafeAreaView } from "react-native-safe-area-context"
import { Formik, FormikProps } from "formik"
import * as Yup from "yup"

interface FormValues {
    email: string,
    password: string,
    confirmPassword: string,
}

export function LoginView ():ReactElement {
    const dispatch = useDispatch()

    // this can be used to access form state outside <Formik/>
    const formRef: RefObject<FormikProps<FormValues>> = useRef(null)

    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .label('Email')
            .email('Enter a valid email')
            .required('Please enter your email'),
        password: Yup.string()
            .label('Password')
            .required('Please enter a password')
            .min(6, 'Password must have at least 6 characters '),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Confirm Password must match Password')
            .required('Please re-enter your password here'),
    })

    const fakeLogin = () => {
        dispatch(setToken({ token: "fakeToken" }))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Formik
                innerRef={formRef}
                initialValues={initialValues}
                onSubmit={fakeLogin}
                validationSchema={validationSchema}
            >
                {(form: FormikProps<FormValues>) => (
                    <>
                        <Input
                            // @ts-ignore
                            // this Input does not have a name prop. Our own component should have one
                            name="email"
                            value={form.values.email}
                            onChangeText={form.handleChange("email")}
                            placeholder="Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onBlur={form.handleBlur("email")}
                            errorMessage={form.touched.email && form.errors.email}
                        />
                        <Input
                            // @ts-ignore
                            name="password"
                            value={form.values.password}
                            placeholder="Password"
                            onChangeText={form.handleChange('password')}
                            onBlur={form.handleBlur('password')}
                            errorMessage={form.touched.password && form.errors.password}
                            secureTextEntry={false}
                        />
                        <Input
                            // @ts-ignore
                            name="confirmPassword"
                            value={form.values.confirmPassword}
                            placeholder="Confirm password"
                            onChangeText={form.handleChange('confirmPassword')}
                            onBlur={form.handleBlur('confirmPassword')}
                            errorMessage={form.touched.confirmPassword && form.errors.confirmPassword}
                            secureTextEntry={false}
                        />
                        <Button
                            title={"Login"}
                            onPress={form.handleSubmit}
                            containerStyle={styles.button}
                            TouchableComponent={TouchableOpacity}
                        />
                        <Button
                            title={"Skip"}
                            onPress={fakeLogin}
                            containerStyle={styles.button}
                            TouchableComponent={TouchableOpacity}
                        />
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    button: { marginVertical: 8 },
})

