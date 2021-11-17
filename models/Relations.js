module.exports = async function (db) {
	db.countries.hasMany(db.users, {
		foreignKey: {
			name: "country_id",
			allowNull: false,
		},
	});

	db.users.belongsTo(db.countries, {
		foreignKey: {
			name: "country_id",
			allowNull: false,
		},
	});

	db.users.hasMany(db.sessions, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.sessions.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.users.hasMany(db.attempts, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.attempts.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.users.hasMany(db.user_bans, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.user_bans.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.users.hasMany(db.projects, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.projects.belongsTo(db.users, {
		foreignKey: {
			name: "user_id",
			allowNull: false,
		},
	});

	db.skills.hasMany(db.projects_skills, {
		foreignKey: {
			name: "skill_id",
			allowNull: false,
		},
	});

	db.projects_skills.belongsTo(db.skills, {
		foreignKey: {
			name: "skill_id",
			allowNull: false,
		},
	});

	db.softwares.hasMany(db.projects_softwares, {
		foreignKey: {
			name: "software_id",
			allowNull: false,
		},
	});

	db.projects_softwares.belongsTo(db.softwares, {
		foreignKey: {
			name: "software_id",
			allowNull: false,
		},
	});

	db.projects.hasMany(db.projects_skills, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});

	db.projects_skills.belongsTo(db.projects, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});

	db.projects.hasMany(db.projects_softwares, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});

	db.projects_softwares.belongsTo(db.projects, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});

	db.projects.hasMany(db.projects_files, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});

	db.projects_files.belongsTo(db.projects, {
		foreignKey: {
			name: "project_id",
			allowNull: false,
		},
	});
};
