export default function FooterCompleteTask({ filterByCompleted }) {
  return (
    <div
      className={`mt-4 flex justify-between text-sm font-bold text-green-600
    
     `}
    >
      <p>
        {filterByCompleted.length > 1
          ? `${filterByCompleted.length} Tasks Completed`
          : filterByCompleted.length === 1
          ? `${filterByCompleted.length} Task Completed`
          : "No Completed Tasks"}
      </p>
      <ul className="flex space-x-1 items-center text-xs">
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
