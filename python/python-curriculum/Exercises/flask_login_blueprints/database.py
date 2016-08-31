from app import db, User

db.drop_all()
db.create_all()
admin = User('admin', 'admin@example.com', 'admin')
guest = User('guest', 'guest@example.com', 'guest')
db.session.add(guest)
db.session.add(admin)
db.session.commit()