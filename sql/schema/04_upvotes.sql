DROP TABLE IF EXISTS upvotes CASCADE;
CREATE TABLE upvotes (
  user_id INTEGER REFERENCES users(id),
  contribution_id INTEGER REFERENCES contributions(id) ON DELETE CASCADE,
  active BOOLEAN DEFAULT true,
  PRIMARY KEY(user_id, contribution_id)
)
