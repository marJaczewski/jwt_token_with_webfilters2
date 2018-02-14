package mariuszjaczewski.jwt_token_with_webfilters.task;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
