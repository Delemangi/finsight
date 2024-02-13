import { CheckBox } from "@rneui/themed";
import { useNotificationState } from "@stores/notificationStore";

interface NotificationCheckBoxProps {
  postType: string;
}

const NotificationCheckBox: React.FC<NotificationCheckBoxProps> = ({
  postType,
}) => {
  const { state, setState } = useNotificationState(postType);

  return (
    <CheckBox
      title={postType.charAt(0).toUpperCase() + postType.slice(1)}
      checked={state}
      onPress={() => setState(!state)}
      checkedColor="#fff"
      uncheckedColor="#fff"
    />
  );
};

export default NotificationCheckBox;
