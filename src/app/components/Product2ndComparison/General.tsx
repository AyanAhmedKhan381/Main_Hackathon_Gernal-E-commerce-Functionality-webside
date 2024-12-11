interface GeneralProps {
  data: { label: string; value: string }[];
}

const General: React.FC<GeneralProps> = ({ data }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">General</h2>
    <ul className="space-y-2">
      {data.map((item, index) => (
        <li key={index} className="flex justify-between">
          <span className="font-medium text-gray-600">{item.label}:</span>
          <span className="text-gray-800">{item.value}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default General;
