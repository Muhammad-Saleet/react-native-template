import React, { ReactElement, RefObject, useRef } from "react"
import { useDispatch } from "react-redux"
import { Input } from "react-native-elements"
import { setToken } from "../../redux/slices/authSlice"
import { SafeAreaView } from "react-native-safe-area-context"
import { Formik, FormikProps } from "formik"
import * as Yup from "yup"
import { useTheme } from "../../theme"
import { Pressable, Text, View } from "components"

interface FormValues {
    email: string,
    password: string,
    confirmPassword: string,
}

export function LoginView ():ReactElement {
    const dispatch = useDispatch()
    const theme = useTheme()

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
        <SafeAreaView style={{ flex: 1, paddingHorizontal: theme.spacing["3"] }}>
            <View alignItems={"center"} justifyContent={"center"}>

            </View>

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

                        <Pressable
                            onPress={form.handleSubmit}
                            minHeight={48}
                            alignItems={"center"}
                            justifyContent={"center"}
                            backgroundColor={"surface"}
                            borderRadius={"m"}
                            pressedStyleProps={{ opacity: 0.7 }}
                            my={4}
                        >
                            <Text variant={"body"} color={"textCritical"}>
                                Login
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={fakeLogin}
                            minHeight={48}
                            alignItems={"center"}
                            justifyContent={"center"}
                            backgroundColor={"surface"}
                            borderRadius={"m"}
                            pressedStyleProps={{ opacity: 0.7 }}
                        >
                            {({ pressed }) => (
                                <Text variant={"body"} color={"textCritical"}>
                                    {pressed ? 'Skip >>>' : 'Skip'}
                                </Text>
                            )}
                        </Pressable>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}
