import { CheckBox } from "@rneui/themed";
import { useNotificationState } from "@stores/notificationStore";


interface NotificationCheckBoxProps {
    postType: string; 
  }

const NotificationCheckBox : React.FC<NotificationCheckBoxProps> = ({ postType }) => {
    const { state, setState } = useNotificationState(postType);
  
    return (
      <CheckBox
        title={postType}
        checked={state}
        onPress={() => setState(!state)}
      />
    );
  };

export default NotificationCheckBox;