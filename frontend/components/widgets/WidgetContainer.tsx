interface WidgetContainerProps {
  widgetData: string;
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ widgetData }) => {
  return <section>{widgetData}</section>;
};

export default WidgetContainer;
