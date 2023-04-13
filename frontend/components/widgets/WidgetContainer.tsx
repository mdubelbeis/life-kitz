interface WidgetContainerProps {
  children: React.ReactNode;
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ children }) => {
  return (
    <section>
      <h2>Widgets</h2>
      {children}
    </section>
  );
};

export default WidgetContainer;
