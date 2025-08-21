# 🚀 **v2案実装指示書 - 新規AIエージェント向け**

## 📍 **作業場所（必須確認）**

**作業フォルダ**: `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\`

**チェックリスト参照先**: `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\template-improvement-analysis\V2_COMPREHENSIVE_CHECKLISTS.md`

---

## 🎯 **実装タスク概要**

v2案（軽量・プロファイル選択式）モダン構造を、4つのプロファイル対応で実装してください。

**選択可能プロファイル**:
1. **minimal** - SPA/MPA + 最小構成（18項目）
2. **ssr** - Next/Nuxt想定（17項目） 
3. **edge** - Serverless/Edge想定（19項目）
4. **lib** - ライブラリ/CLI想定（17項目）

---

## 📋 **実装手順**

### **Step 1: 必須参考資料を読み込み**

以下のファイルを必ずReadツールで読んでから開始：

1. `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\template-improvement-analysis\V2_COMPREHENSIVE_CHECKLISTS.md`
2. `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\template-improvement-analysis\PROPOSED_MODERN_STRUCTURE2.md`
3. `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\template-improvement-analysis\V2_PROFILE_SWITCHING_GUIDE.md`

### **Step 2: 共通環境準備（20項目）**

**作業場所**: `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\`

チェックリストの「1. 共通環境準備チェックリスト」を順番に実行：

```bash
# 例: Node.js確認
node --version

# 例: プロジェクト初期化
npm init -y

# 例: TypeScript設定
npm i -D typescript vitest playwright
```

### **Step 3: プロファイル選択と適用**

**以下から1つ選択**してプロファイル適用：

#### **Option A: minimal プロファイル**
```bash
cd "C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template"
npm run init:profile -- minimal
```
→ チェックリスト「2. minimalプロファイル チェックリスト」（18項目）を実行

#### **Option B: ssr プロファイル**
```bash
cd "C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template"
npm run init:profile -- ssr
```
→ チェックリスト「3. ssrプロファイル チェックリスト」（17項目）を実行

#### **Option C: edge プロファイル**
```bash
cd "C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template"
npm run init:profile -- edge
```
→ チェックリスト「4. edgeプロファイル チェックリスト」（19項目）を実行

#### **Option D: lib プロファイル**
```bash
cd "C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template"
npm run init:profile -- lib
```
→ チェックリスト「5. libプロファイル チェックリスト」（17項目）を実行

### **Step 4: 品質確認（必須）**

**作業場所**: `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\`

チェックリスト「7. 品質管理チェックリスト」（16項目）を実行：

```bash
# 未使用検知
npm run check:unused

# テスト実行
npm test

# E2Eテスト
npm run test:e2e
```

---

## 📁 **期待される成果物**

### **共通ファイル**
```
C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\
├── package.json
├── tsconfig.base.json
├── .eslintrc.cjs
├── .dependency-cruiser.cjs
├── profiles.json
├── core/
│   ├── domain/
│   ├── usecases/
│   ├── types/
│   └── index.ts
├── shared/
│   ├── utils/
│   ├── constants/
│   └── types/
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
└── tools/
    ├── profile/
    ├── codegen/
    └── smoke/
```

### **プロファイル固有ファイル**

#### **minimal選択時**
```
├── app/
│   └── web/
│       ├── index.html
│       └── src/
│           ├── app.tsx
│           ├── components/
│           └── pages/
```

#### **ssr選択時**
```
├── app/
│   └── web/          # Next/Nuxtプロジェクト用
```

#### **edge選択時**
```
├── functions/
│   ├── handler.ts
│   └── types/
```

#### **lib選択時**
```
├── src/              # ライブラリエントリーポイント
└── cli/              # CLI実装（必要時）
```

---

## ⚠️ **重要な注意事項**

### **1. 作業場所の確認**
```bash
# 必ず作業開始前に実行
pwd
# 結果: C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template
```

### **2. プロファイル原則**
- **必要なものだけ作る**: プロファイルに含まれないディレクトリは作成しない
- **後から追加可能**: プロファイル切り替えでいつでも拡張可能

### **3. 品質チェック必須**
```bash
# エラーが出たら必ず修正
npm run check:unused
```

### **4. パス記載は全て絶対パス**
- ❌ `./src/` 
- ✅ `C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\src\`

---

## 🚨 **トラブル時の対処**

### **よくある問題と解決方法**

1. **プロファイル適用エラー**
   ```bash
   # profiles.jsonの存在確認
   ls "C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template\profiles.json"
   ```

2. **依存関係エラー**
   ```bash
   # 依存関係再インストール
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScriptエラー**
   ```bash
   # TypeScript設定確認
   npx tsc --noEmit
   ```

詳細は `V2_COMPREHENSIVE_CHECKLISTS.md` の「8. トラブルシューティング」（15項目）を参照。

---

## 📞 **完了報告フォーマット**

作業完了時は以下を報告：

```
✅ 作業完了報告

【選択プロファイル】: minimal/ssr/edge/lib のいずれか
【作業場所】: C:\Users\user\Desktop\work\90_cc\20250817\0000-00-00-project-template
【実行した項目数】: 共通20項目 + プロファイル固有○○項目 + 品質確認16項目
【作成したファイル数】: ○○個
【テスト結果】: 成功/失敗
【未使用検知結果】: クリーン/要修正
【特記事項】: （あれば）
```

---

**作成日**: 2025-08-19  
**対象**: 新規AIエージェント  
**目的**: v2案モダン構造の完全実装  
**参照**: V2_COMPREHENSIVE_CHECKLISTS.md（133項目）