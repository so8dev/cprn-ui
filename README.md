# CPRN/UI

## 概要

**cprn/ui** は、iOS / Android / Web を対象としたクロスプラットフォームUI設計の検証プロジェクトです。

React Native を基盤に **Expo** を利用し、単一コードベースで動作するUIコンポーネント群を実装しています。

本プロジェクトの目的は「完成度の高いUIライブラリを作ること」ではなく、

* プラットフォーム差異の理解
* UI抽象化の設計パターン検証
* スタイリング戦略の比較・実験

などなどです。

名称は、依存ライブラリである **twrnc（tailwind-react-native-classnames）** から着想を得て
**cprn/ui（Cross Platform React Native UI）** と命名しました。

## キャプチャ

### Demo

https://github.com/user-attachments/assets/65e68dac-477b-4256-9252-76778bf5fe99

### Web

<details><summary>Details</summary>
<p align="center">
  <img width="400" alt="web_light_input" src="https://github.com/user-attachments/assets/d0ef7bd4-0daa-4cd6-9e4c-e5b2e4ba908a" />
  <img width="400" alt="web_dark_input" src="https://github.com/user-attachments/assets/fc1d68cb-5dc0-44de-b692-3a4369e96eb4" />
</p>
<p align="center">
  <img width="400" alt="web_light_button" src="https://github.com/user-attachments/assets/bc40f80d-2531-4447-b4d7-decffc0a2dc9" />
  <img width="400" alt="web_dark_button" src="https://github.com/user-attachments/assets/151ea8ce-2aef-4b8d-b3d8-687b2433c588" />
</p>
<p align="center">
  <img width="400" alt="web_light_actionsheet" src="https://github.com/user-attachments/assets/b1a481b7-86ef-44aa-8527-7c661092b47f" />
  <img width="400" alt="web_dark_actionsheet" src="https://github.com/user-attachments/assets/af7e5a05-bfa9-476d-8765-611cfdec0234" />
</p>
</details> 

### Android（Expo Go）

<details><summary>Details</summary>
<p align="center">
  <img width="300" alt="android_light_menu" src="https://github.com/user-attachments/assets/5e08c3a7-f5ce-40a4-9270-4171073c6849" />
  <img width="300" alt="android_dark_menu" src="https://github.com/user-attachments/assets/6d0be559-568e-4dba-ae46-69f85824be10" />
</p>
<p align="center">
  <img width="300" alt="android_light_input" src="https://github.com/user-attachments/assets/011ceba8-d2ed-40e5-8ddd-91f6bf1e0280" />
  <img width="300" alt="android_dark_input" src="https://github.com/user-attachments/assets/3eb67f5c-9caa-4d07-a8f6-8be7198541c8" />
</p>
<p align="center">
  <img width="300" alt="android_light_button" src="https://github.com/user-attachments/assets/19044b40-1d08-4e03-bdcb-38595bde00b1" />
  <img width="300" alt="android_dark_button" src="https://github.com/user-attachments/assets/b4c80959-aceb-4003-bbc9-2959d1aff17c" />
</p>
<p align="center">
  <img width="300" alt="android_light_actionsheet" src="https://github.com/user-attachments/assets/3895089d-db84-43e1-b012-66a12031b1d7" />
  <img width="300" alt="android_dark_actionsheet" src="https://github.com/user-attachments/assets/c190c355-dc7d-4266-8820-dc554b1b0373" />
</p>
</details> 

### IOS（Expo Go）

<details><summary>Details</summary>
<p align="center">
  <img width="300" alt="ios_light_menu" src="https://github.com/user-attachments/assets/996f8a43-4eb0-4684-9578-adfd261fd08c" />
  <img width="300" alt="ios_dark_menu" src="https://github.com/user-attachments/assets/5da53705-71f6-4c9c-bff9-87130b218272" />
</p>
<p align="center">
  <img width="300" alt="ios_light_input" src="https://github.com/user-attachments/assets/e7fb0179-4cfd-4584-9a59-f99d765e0c88" />
  <img width="300" alt="ios_dark_input" src="https://github.com/user-attachments/assets/52f366f5-8731-4eae-b299-2ee56846b4bf" />
</p>
<p align="center"> 
  <img width="300" alt="ios_dark_button" src="https://github.com/user-attachments/assets/a05b2c7c-8712-4bc3-ab5d-69bb5bdd82e0" />
  <img width="300" alt="ios_light_button" src="https://github.com/user-attachments/assets/5aa299f0-68c3-452b-977e-0bb843c7f031" />
</p>
</details> 


## Usage

### Input

```tsx
<Input
  variant="outlined"
  size={size}
  isError={isError}
  isDisabled={isDisabled}
  isReadOnly={isReadOnly}
>
  <Input.TextField placeholder="Outlined Input" />
</Input>
```

### Button

```tsx
<Button
  variant="contained"
  action={action}
  size={size}
  isDisabled={isDisabled}
>
  <Button.Text>Contained Button</Button.Text>
</Button>
```

### FormControl

```tsx
<FormControl
  isRequired
  isError={isError}
  isDisabled={isDisabled}
  isReadOnly={isReadOnly}
>
  <FormControl.Label>Outlined Input</FormControl.Label>
  <Input variant="outlined">
    <Input.TextField placeholder="Outlined Input" />
  </Input>
  <FormControl.HelperText>
      This is an outlined input
    </FormControl.HelperText>
  <FormControl.ErrorText>
    This is an error message
  </FormControl.ErrorText>
</FormControl>
```

---


## 使用技術

* TypeScript
* React Native
* Expo
* [twrnc](https://github.com/jaredh159/tailwind-react-native-classnames)
  * TailwindのユーティリティクラスをReact NativeのStyleへ変換
* [cva](https://github.com/joe-bell/cva)
  * Variantベースのスタイル定義
  * サイズやトーンなどの状態表現を整理するために導入


## 実装方針・検証ポイント

### 1. クロスプラットフォーム設計の検証

* Web / iOS / Android の差異吸収パターンを実験
* Platform 分岐に依存しすぎない構造を模索
* hover など Web 特有の概念の抽象化を検討

### 2. スタイリング戦略の検証

* twrnc × cva によるユーティリティ + Variant 設計の実験
* Tailwind は初導入のため、思想や設計パターンの理解も含めて検証
* 擬似クラス（hover / focus / active）の拡張的な扱いを検討

### 3. コンポーネント設計の実験

* Props と Variant の設計粒度の最適化
* Compound Pattern の検証

## デザインスタンス

* マテリアルデザインを参考にするが、準拠は目的としない
* 見た目のはひとまずそれっぽいレベル

## スコープ

* ライブラリ公開、プロダクション利用はまだ考えない
* 試行錯誤と設計検証を主目的とする

## 今後の目標

* UI/UX向上
* スタイリング設計の整理と一貫性の向上
* コンポーネントバリエーションの拡充
* アクセシビリティ対応の強化
* 状態管理とUI責務の分離パターンの検討
* テスト基盤の整備
* ドキュメント整備

---

# Expo アプリの起動方法 👋

本プロジェクトは **Expo** を利用して作成されています。
`create-expo-app` をベースに構築しています。

## はじめに

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. アプリの起動

```bash
npx run start
```

起動後、ターミナル上に開発サーバーの情報が表示されます。

---

## アプリの確認方法

起動後は、以下の方法でアプリを確認できます。

### ■ ローカル環境で確認する

* 表示された **Local URL（[http://localhost:8081](http://localhost:8081）)** にブラウザでアクセス
* Android エミュレーター
* iOS シミュレーター

---

### ■ 実機で確認する（Expo Go）

1. スマートフォンに **Expo Go** アプリをインストール
2. ターミナルに表示される **QRコードを読み取る**
3. 実機でアプリが起動

Expo Go は簡易的な開発用サンドボックス環境です。
