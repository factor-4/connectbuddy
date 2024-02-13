'use client'
import React from 'react'
import { ConfigProvider } from 'antd';

function ThemeProvider(
    { children }: { children: React.ReactNode }
) {
    return (
        <div>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#31304D',
                        borderRadius: 2
                    },
                    components: {
                        Button: {
                            controlHeight: 45,
                            boxShadow: 'none',
                        }
                    }
                }}>
                {children}
            </ConfigProvider>
        </div>
    )
}

export default ThemeProvider