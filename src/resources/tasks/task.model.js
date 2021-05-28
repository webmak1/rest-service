/**
 * Task model
 * @module task:model
 */

const uuid = require('uuid').v4;

/**
 * createTask type definition
 * @typedef {Object} createBoard      Contains parameters for creating task instance
 * @property {string} [id]            Unique task id
 * @property {string} title           Task title
 * @property {string} order           Task order
 * @property {string} description     Task description
 * @property {number} userId          Task owner user userId
 * @property {number} boardId         Task owner board userId
 * @property {number} columnId        Task owner column userId
 */

/**
 * viewTask type definition
 * @typedef {Object} viewBoard        Contains task`s parameters for responce
 * @property {string} [id]            Unique task id
 * @property {string} title           Task title
 * @property {string} order           Task order
 * @property {string} description     Task description
 * @property {number} userId          Task owner user userId
 * @property {number} boardId         Task owner board userId
 * @property {number} columnId        Task owner column userId
 */

/** Class representing a task. */
class Task {
  /**
   * Create a task.
   * @param {createTask} createTask Parameters for creating task instance
   */
  constructor({
    id = uuid(),
    title = 'Title',
    order = 0,
    description = 'description',
    userId = null,
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   * Return a representing of task for response
   * @static
   * @param {Task} task a task
   * @returns {viewBoard} task`s parameters for responce
   */
  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;