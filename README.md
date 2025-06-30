# React Toast Component

A simple and customizable toast notification component for your React projects.

## Installation

Install the package using npm or yarn:

```bash
npm install @mohsensami/toast
# or
yarn add @mohsensami/toast
```

## Quick Usage

```jsx
import { Toast } from "@mohsensami/toast";

function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Show Toast</button>
      {showToast && (
        <Toast
          message="Operation completed successfully!"
          duration={4000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
```

## Props

| Name     | Type                                          | Default    | Description                               |
| -------- | --------------------------------------------- | ---------- | ----------------------------------------- |
| message  | `string`                                      | -          | The toast message (required)              |
| type     | `"success" \| "error" \| "info" \| "warning"` | `"info"`   | The type of toast (different color/style) |
| duration | `number`                                      | `3000`     | Display duration in milliseconds          |
| onClose  | `() => void`                                  | -          | Callback when the toast is closed         |
| position | `"top" \| "bottom"`                           | `"bottom"` | Toast position on the screen              |
| rtl      | `boolean`                                     | `false`    | Display toast in right-to-left (RTL) mode |

## Examples

### Success Toast

```jsx
<Toast message="Operation was successful!" type="success" />
```

### Error Toast

```jsx
<Toast message="An error occurred!" type="error" />
```

### Info Toast

```jsx
<Toast message="This is an info message." type="info" />
```

### Warning Toast

```jsx
<Toast message="Please be careful!" type="warning" />
```

### Change Toast Position

```jsx
<Toast message="Top message" position="top" />
```

### RTL Toast

```jsx
<Toast message="پیام راست به چپ" rtl={true} />
```

## Styling

The Toast component comes with a simple and modern default style. You can override or customize the `Toast.css` file as needed.

## Official Peer Dependencies

| Package   | Supported Versions |
| --------- | ------------------ |
| react     | ^17.0.0 or ^18.0.0 |
| react-dom | ^17.0.0 or ^18.0.0 |

## Contributing

Contributions and pull requests are welcome!

---

Made with ❤️ by Mohsen Sami
