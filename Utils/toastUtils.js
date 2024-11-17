// toastUtils.js
import { toast } from "react-toastify"

export const showToast = (message, type = "error") => {
  const options = {
    autoClose: type === "error" ? 3000 : 1000, // Customize autoClose based on type
  }

  switch (type) {
    case "success":
      toast.success(message, options)
      break
    case "info":
      toast.info(message, options)
      break
    case "warning":
      toast.warning(message, options)
      break
    default:
      toast.error(message, options)
  }
}
