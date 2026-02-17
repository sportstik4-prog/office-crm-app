interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
  avatar: string;
}

const activities: Activity[] = [
  { id: 1, user: 'Sarah Johnson', action: 'completed a new project', time: '5 minutes ago', avatar: 'bg-pink-500' },
  { id: 2, user: 'Mike Chen', action: 'uploaded 3 files', time: '23 minutes ago', avatar: 'bg-blue-500' },
  { id: 3, user: 'Emma Wilson', action: 'commented on a task', time: '1 hour ago', avatar: 'bg-green-500' },
  { id: 4, user: 'Alex Turner', action: 'created a new team', time: '2 hours ago', avatar: 'bg-purple-500' },
  { id: 5, user: 'Lisa Anderson', action: 'shared a document', time: '3 hours ago', avatar: 'bg-orange-500' },
];

export function ActivityList() {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3">
            <div className={`size-10 rounded-full ${activity.avatar} flex-shrink-0`}></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{' '}
                <span className="text-gray-600">{activity.action}</span>
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
