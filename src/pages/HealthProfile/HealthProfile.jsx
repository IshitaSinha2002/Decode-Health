import "./HealthProfile.css";

export default function HealthProfile() {
  return (
    <div className="profile-page">

      <h1>Your Health Profile</h1>

      <div className="form-container">

        {/* Basic Identity */}
        <div className="section">
          <h2>Basic Identity</h2>

          <label>Age</label>
          <input placeholder="Enter age" />

          <label>Gender</label>
          <div className="button-group">
            <button className="active">Male</button>
            <button>Female</button>
            <button>Other</button>
          </div>

          <label>Height (cm)</label>
          <input placeholder="e.g. 175" />

          <label>Weight (kg)</label>
          <input placeholder="e.g. 70" />
        </div>

        {/* Body Composition */}
        <div className="section">
          <h2>Body Composition</h2>

          <label>Neck (cm)</label>
          <input />

          <label>Waist (cm)</label>
          <input />

          <label>Hip (cm)</label>
          <input />
        </div>

        {/* Lifestyle */}
        <div className="section">
          <h2>Lifestyle & Dynamics</h2>

          <label>Activity Level</label>
          <select>
            <option>Sedentary</option>
            <option>Moderate</option>
            <option>Active</option>
          </select>

          <label>Daily Steps</label>
          <input placeholder="8000" />

          <label>Workout Type</label>
          <div className="button-group">
            <button>Strength</button>
            <button>Cardio</button>
            <button>Yoga</button>
            <button>Swimming</button>
          </div>
        </div>

        {/* Nutrition */}
        <div className="section">
          <h2>Nutrition</h2>

          <label>Diet Type</label>
          <div className="button-group">
            <button>Omnivore</button>
            <button className="active">Vegetarian</button>
          </div>

          <label>Meals / Day</label>
          <input placeholder="3" />

          <label>Calorie Intake</label>
          <input placeholder="2200" />
        </div>

        {/* Goals */}
        <div className="section">
          <h2>Core Goals</h2>

          <div className="button-group wrap">
            <button>Weight Loss</button>
            <button>Muscle Gain</button>
            <button>Hormonal Balance</button>
          </div>
        </div>

        {/* Submit */}
        <button className="submit-btn">Submit Profile</button>

      </div>
    </div>
  );
}