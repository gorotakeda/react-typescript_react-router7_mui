// アバウトページコンポーネント
import React from 'react'
import { CardContainer } from '../components/ui/CardContainer'

const content = [
    {
        contentTitle: "⚛️ React 19.0.0",
        content: "最新のReactバージョンで、新しい機能と改善されたパフォーマンスを提供",
    },
    {
        contentTitle: "🔄 React Router 7.1.5",
        content: "最新のルーティングライブラリで、宣言的なナビゲーションを実現",
    },
    {
        contentTitle: "🎨 Material UI v6",
        content: "Googleのマテリアルデザインに基づいた美しいUIコンポーネント",
    },
    {
        contentTitle: "💻 TypeScript",
        content: "型安全性による開発体験の向上とバグの早期発見",
    },
    {
        contentTitle: "🚀 Vite",
        content: "高速なビルドツールとホットリロードによる開発効率の向上",
    },
]

export const AboutPage: React.FC = () => {
    return (
        <CardContainer 
            title="技術スタック"
            subTitle="使用技術"
            content={content}
        />
    )
}