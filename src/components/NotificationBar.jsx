export default function NotificationBar({ notificationText, notificationCss, textColor }) {
    return (
        <div className={`container mx-auto ${notificationCss}`}>
          <h4 className={`${textColor}`}>
            {notificationText}
          </h4>
        </div>
    );
  }
  