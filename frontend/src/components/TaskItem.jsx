const TaskItem = ({ task, onEdit, onDelete, getStatusColor }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-800 flex-1">
          {task.title}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
            task.status
          )}`}
        >
          {task.status.charAt(0).toUpperCase() + task.status.slice(1).replace("-", " ")}
        </span>
      </div>
      {task.description && (
        <p className="text-gray-600 mb-4 line-clamp-3">{task.description}</p>
      )}
      <div className="text-sm text-gray-500 mb-4">
        Created: {formatDate(task.createdAt)}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="flex-1 bg-indigo-100 text-indigo-700 py-2 px-4 rounded-lg hover:bg-indigo-200 transition-colors text-sm font-medium"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex-1 bg-red-100 text-red-700 py-2 px-4 rounded-lg hover:bg-red-200 transition-colors text-sm font-medium"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;



