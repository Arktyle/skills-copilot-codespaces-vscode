function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node.js'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
    removeSkill: function (skill) {
      this.skills = this.skills.filter((s) => s !== skill);
    },
  };
}