import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

function App() {
  const [exercises, setExercises] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedMuscleGroup, setSelectedMuscleGroup] = useState('All')

  useEffect(() => {
    fetch('/exercises.json')
      .then(response => response.json())
      .then(data => setExercises(data))
      .catch(error => console.error('Error loading exercises:', error))
  }, [])

  const muscleGroups = ['All', ...new Set(exercises.map(ex => ex.muscleGroup))]

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMuscleGroup = selectedMuscleGroup === 'All' || exercise.muscleGroup === selectedMuscleGroup
    return matchesSearch && matchesMuscleGroup
  })

  const getMuscleGroupColor = (muscleGroup) => {
    const colors = {
      'Core': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      'Legs': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Biceps': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Calves': 'bg-green-500/20 text-green-300 border-green-500/30',
      'Chest': 'bg-red-500/20 text-red-300 border-red-500/30',
      'Arms': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
    }
    return colors[muscleGroup] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  }

  const getTypeColor = (type) => {
    const colors = {
      'Machine': 'bg-slate-500/20 text-slate-300 border-slate-500/30',
      'Cable': 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      'Dumbbell': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      'Barbell': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
      'Bodyweight': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      'Other': 'bg-gray-500/20 text-gray-300 border-gray-500/30',
    }
    return colors[type] || 'bg-gray-500/20 text-gray-300 border-gray-500/30'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Exercise List</h1>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search exercises..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Muscle Group Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {muscleGroups.map(group => (
            <button
              key={group}
              onClick={() => setSelectedMuscleGroup(group)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMuscleGroup === group
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {group}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2">
          {filteredExercises.map((exercise, index) => (
            <Card key={index} className="hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-200 bg-gray-800 border-gray-700">
              <CardContent className="p-5">
                <h3 className="font-semibold text-lg mb-3 text-white leading-tight">
                  {exercise.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getMuscleGroupColor(exercise.muscleGroup)}>
                    {exercise.muscleGroup}
                  </Badge>
                  <Badge className={getTypeColor(exercise.type)}>
                    {exercise.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
