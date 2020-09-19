DROP TABLE IF EXISTS contributions CASCADE;
CREATE TABLE contributions (
  id SERIAL PRIMARY KEY NOT NULL,
  story_id INTEGER REFERENCES stories.id,
  author_id INTEGER REFERENCES users.id,
  sequenceNumber serial,
  accepted boolean DEFAULT false,
  text text,
)
