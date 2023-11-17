# React-TypeScript-ModernTodoList

리액트에서 타입스크립트를 사용해 구현한 Todo List입니다.

[구경하기](https://jw-r.github.io/React-TypeScript-ModernTodoList/)

## Preview

<video src='https://github.com/jw-r/React-TypeScript-ModernTodoList/assets/88191233/a86b30fa-4498-4555-9715-9dd225b7d9ab' controls autoplay loop />;

## Installation & Launch

```bash
$ npm install

# use Yarn
$ yarn start
```

## Folder Structure

폴더 구조는 components, constants, hooks, styles, types, utils로 이루어져 있습니다.

### components

레이아웃 컴포넌트가 담긴 폴더입니다.

#### TodoList.tsx

TodoList 애플리케이션 Component입니다

#### TodoHandler.tsx

Todo를 추가하거나 TodoCard를 삭제등의 인터렉션을 가진 Component입니다

#### TodoCards.tsx

TodoCard 리스트를 출력해주는 Component입니다

#### TodoCard.tsx

TodoCard 하나에 대해서 렌더링 해주는 Component입니다

#### AddCardButton.tsx

TodoCard를 추가하는 인터렉션을 포함한 Component입니다

#### CardTitle.tsx

카드의 Title을 렌더링하는 Component로 title 변경 인터렉션을 포함합니다

#### DeleteCardButton.tsx

카드를 삭제하는 인터렉션을 포함한 Component입니다

#### TodoContent.tsx

하나의 Todo 항목을 렌더링하는 Component로 Check 인터렉션(Todo 완료)을 가집니다.

#### Button.tsx

재사용 가능한 버튼 Component입니다

---

### hooks

#### useCardStore.ts

`zustand`로 구현된 Todo 카드 훅으로 Card의 상태와 액션을 포함합니다

`zustand`의 middleware(persist)를 통해 localStorage와 연동되었습니다

- 상태

  - `카드 리스트 정보(cardRepository)`
  - `현재 선택 된 카드의 아이디(selectedCardId)`

- 기능

  - `카드 생성`
  - `카드 삭제`
  - `카드 전체 삭제`
  - `카드 선택`
  - `카드 추가`
  - `카드 Title 변경`
  - `Todo 항목의 완료 상태 변경`

---

### utils

애플리케이션에서 사용되는 유틸 함수를 포함합니다

#### isBlank.ts

string이 공백으로만 이루어져있는지 확인합니다

---

### types

애플리케이션에서 사용되는 인터널 타입을 정의한 폴더입니다

---

### constants

애플리케이션에서 사용되는 상수들을 정의한 폴더입니다

---

### styles

`emotion`으로 정의된 `theme`과 reset등의 스타일을 포함합니다
