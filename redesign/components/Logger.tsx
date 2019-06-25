export interface ILogger {
  /** Log out a message */
  log(
    message: string,
    opts?: { source?: string; id?: any; subject?: any },
  ): void
  /** Create a child logger with path */
  scope(domain: string): ILogger
}

export class EasyLogger implements ILogger {
  constructor(
    private _log: (scope: string, message: string, subject?: any) => void,
    private _scope = "",
  ) {}

  scope(domain: string): ILogger {
    return new EasyLogger(
      this._log,
      (this._scope ? this._scope + "/" : "") + domain,
    )
  }

  log(message: string, opts?: { source?: string; id?: any; subject?: any }) {
    if (opts != null) {
      if (opts.id) message += ` #${opts.id}`
      if (opts.source) message += ` (${opts.source})`
      if (opts.subject) return this._log(this._scope, message, opts.subject)
    }

    this._log(this._scope, message)
  }
}
