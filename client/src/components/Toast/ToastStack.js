class ToastStack {
  constructor() {
    if (ToastStack._instance) {
      return ToastStack._instance;
    }

    this.toasts = [];
    ToastStack._instance = this;
  }

  onChange(cb) {
    this.callback = cb;
  }

  removeCallback() {
    this.callback = () => {};
  }

  push(toast) {
    this.toasts.push(toast);
    this.callback(this.toasts);
    setTimeout(() => this.pop(), toast.timout ?? 2200);
  }

  pop() {
    this.toasts.length = this.toasts.length - 1;
    this.callback(this.toasts);
  }
}

export default new ToastStack();
